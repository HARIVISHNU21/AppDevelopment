package com.example.demo.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.UserLoginEntity;

@Repository
public interface UserLoginRepository extends JpaRepository<UserLoginEntity, Integer>{

}