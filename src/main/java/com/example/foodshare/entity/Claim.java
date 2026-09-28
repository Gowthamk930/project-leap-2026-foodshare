package com.example.foodshare.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Claim {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long foodId;
    private Long ngoId;
    private String claimDate;

    public Claim() {
    }

    public Long getId() {
        return id;
    }

    public Long getFoodId() {
        return foodId;
    }

    public void setFoodId(Long foodId) {
        this.foodId = foodId;
    }

    public Long getNgoId() {
        return ngoId;
    }

    public void setNgoId(Long ngoId) {
        this.ngoId = ngoId;
    }

    public String getClaimDate() {
        return claimDate;
    }

    public void setClaimDate(String claimDate) {
        this.claimDate = claimDate;
    }
}