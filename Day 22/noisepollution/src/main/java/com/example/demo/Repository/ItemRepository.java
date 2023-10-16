package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Item;
@Repository
public interface ItemRepository extends JpaRepository<Item,Long>{}