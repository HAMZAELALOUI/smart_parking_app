#!/usr/bin/env python

import os
import sys
import optparse
from math import sqrt
import xml.etree.ElementTree as ET

# Import SUMO modules
if 'SUMO_HOME' in os.environ:
    tools = os.path.join(os.environ['SUMO_HOME'], 'tools')
    sys.path.append(tools)
else:
    sys.exit("Please declare environment variable 'SUMO_HOME'")

from sumolib import checkBinary
import traci

def get_options():
    opt_parser = optparse.OptionParser()
    opt_parser.add_option("--nogui", action="store_true",
                         default=False, help="run the commandline version of sumo")
    options, args = opt_parser.parse_args()
    return options

# Initialize dictionaries to track parking space occupancy
parking_spaces_status = {}
previous_parking_spaces_status = {}

# Contains TraCI control loop
def run():
    step = 0
    while traci.simulation.getMinExpectedNumber() > 0:
        traci.simulationStep()
        step += 1

        # Reset all parking spaces to empty
        for area_id in parking_spaces_status:
            parking_spaces_status[area_id] = [(space_id, False) for space_id, _ in parking_spaces_status[area_id]]

        # Check vehicle positions and update parking space occupancy
        for area_id, spaces in parking_spaces_status.items():
            for i, (space_id, _) in enumerate(spaces):
                for vehicle_id in traci.parkingarea.getVehicleIDs(area_id):
                    x, y = traci.vehicle.getPosition(vehicle_id)
                    if is_vehicle_in_space(x, y, parking_spaces_coords[space_id]):
                        parking_spaces_status[area_id][i] = (space_id, True)

        # Print the changes in parking space status
        print(f"Step {step}:")
        check_parking_spaces()

        # Update the previous parking spaces status
        update_previous_parking_spaces_status()

    print(step)

    traci.close()
    sys.stdout.flush()

def is_vehicle_in_space(vehicle_x, vehicle_y, space_coords):
    space_x, space_y = space_coords
    proximity_threshold = 1.5  # Define a smaller proximity threshold for parking
    return sqrt((vehicle_x - space_x)**2 + (vehicle_y - space_y)**2) < proximity_threshold

def check_parking_spaces():
    global previous_parking_spaces_status
    for area_id, status_list in parking_spaces_status.items():
        for i, (space_id, status) in enumerate(status_list):
            prev_status = previous_parking_spaces_status.get(area_id, [])[i][1] if area_id in previous_parking_spaces_status else None
            if prev_status != status:
                status_text = "occupied" if status else "empty"
                print(f"  Space {space_id} is {status_text}")

def update_previous_parking_spaces_status():
    global previous_parking_spaces_status
    previous_parking_spaces_status = {area_id: list(spaces) for area_id, spaces in parking_spaces_status.items()}

# Main entry point
if __name__ == "__main__":
    options = get_options()

    # Parse the XML file for parking space information
    tree = ET.parse('ParkingSpaces.add.xml')
    root = tree.getroot()

    parking_spaces_coords = {}  # Dictionary to hold coordinates for each space_id

    # Extract parking space information from the XML
    for parking_area in root.findall('.//parkingArea'):
        area_id = parking_area.get('id')
        spaces = []
        for i, space in enumerate(parking_area.findall('.//space')):
            x = float(space.get('x'))
            y = float(space.get('y'))
            space_id = f"{area_id}_{i}"  # Generate a unique ID for each space
            spaces.append((space_id, False))
            parking_spaces_coords[space_id] = (x, y)
        parking_spaces_status[area_id] = spaces
        previous_parking_spaces_status[area_id] = [(space_id, False) for space_id, _ in spaces]

    # Check binary
    if options.nogui:
        sumoBinary = checkBinary('sumo')
    else:
        sumoBinary = checkBinary('sumo-gui')

    # Start SUMO simulation
    traci.start([sumoBinary, "-c", "parking.sumocfg"])

    # Run the simulation
    run()

    # Check parking space status after simulation
    check_parking_spaces()
