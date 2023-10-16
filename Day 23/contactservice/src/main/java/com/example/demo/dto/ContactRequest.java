package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ContactRequest 
{
	 private String firstname;
	    private String lastname;
	    private String email;
	    private String mobile;
	    private String message;
}