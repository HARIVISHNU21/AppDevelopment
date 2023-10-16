package com.example.demo.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.UserRegisterEntity;


@Repository
public interface UserRegisterRepository extends JpaRepository<UserRegisterEntity, Integer>{

}