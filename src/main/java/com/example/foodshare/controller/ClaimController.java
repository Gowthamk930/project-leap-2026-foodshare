package com.example.foodshare.controller;

import com.example.foodshare.entity.Claim;
import com.example.foodshare.repository.ClaimRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/claims")
public class ClaimController {

    private final ClaimRepository claimRepository;

    public ClaimController(ClaimRepository claimRepository) {
        this.claimRepository = claimRepository;
    }

    @PostMapping
    public Claim createClaim(@RequestBody Claim claim) {
        return claimRepository.save(claim);
    }

    @GetMapping
    public List<Claim> getAllClaims() {
        return claimRepository.findAll();
    }
}