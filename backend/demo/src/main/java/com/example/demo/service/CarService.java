package com.example.demo.service;
import com.example.demo.bean.Car;
import com.example.demo.dao.CarRepository;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class CarService {

    private final CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    public Car getCarById(Long id) {
        Optional<Car> optionalCar = carRepository.findById(id);
        return optionalCar.orElse(null);
    }

    public Car createCar(Car car) {
        return carRepository.save(car);
    }

    public Car updateCar(Long id, Car carDetails) {
        Optional<Car> optionalCar = carRepository.findById(id);
        if (optionalCar.isPresent()) {
            Car car = optionalCar.get();
            car.setType(carDetails.getType());
            car.setMatricule(carDetails.getMatricule());
            return carRepository.save(car);
        } else {
            return null;
        }
    }

    public void deleteCar(Long id) {
        Optional<Car> optionalCar = carRepository.findById(id);
        optionalCar.ifPresent(carRepository::delete);
    }
}
