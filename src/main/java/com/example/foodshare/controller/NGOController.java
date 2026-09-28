package com.example.foodshare.controller;

import com.example.foodshare.entity.NGO;
import com.example.foodshare.repository.NGORepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ngos")
public class NGOController {

    private final NGORepository ngoRepository;

    public NGOController(NGORepository ngoRepository) {
        this.ngoRepository = ngoRepository;
    }

    @PostMapping
    public NGO addNGO(@RequestBody NGO ngo) {
        return ngoRepository.save(ngo);
    }

    @GetMapping
    public List<NGO> getAllNGOs() {
        return ngoRepository.findAll();
    }
}