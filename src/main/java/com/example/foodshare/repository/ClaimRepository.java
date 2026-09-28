package com.example.foodshare.repository;

import com.example.foodshare.entity.Claim;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClaimRepository extends JpaRepository<Claim, Long> {
}