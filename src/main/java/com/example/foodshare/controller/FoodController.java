package com.example.foodshare.controller;

import com.example.foodshare.entity.Food;
import com.example.foodshare.repository.FoodRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/foods")
public class FoodController {

    private final FoodRepository foodRepository;

    public FoodController(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    @PostMapping
    public Food addFood(@RequestBody Food food) {
        return foodRepository.save(food);
    }

    @GetMapping
    public List<Food> getAllFood() {
        return foodRepository.findAll();
    }
}