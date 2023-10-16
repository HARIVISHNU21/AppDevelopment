package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.ContactRequest;
import com.example.demo.dto.ContactResponse;
import com.example.demo.entity.Contact;
import com.example.demo.repository.ContactRepository;

@Service
public class ContactService
{
	@Autowired
private ContactRepository contactRepository;
    
	public boolean addContact(ContactRequest contactRequest) 
	{
		Contact contact=Contact.builder().firstname(contactRequest.getFirstname()).lastname(contactRequest.getLastname()).email(contactRequest.getEmail()).mobile(contactRequest.getMobile()).message(contactRequest.getMessage()).build();
		contactRepository.save(contact);
		List<Contact> contactData=contactRepository.findAll();
		if(contactData.size()>0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	public List<ContactResponse> getContact() 
	{
		List<Contact> contacts=contactRepository.findAll();
		return contacts.stream().map(contact->mapToContactResponse(contact)).toList();
	}
	private ContactResponse mapToContactResponse(Contact contact)
	{
		return ContactResponse.builder().firstname(contact.getFirstname()).lastname(contact.getLastname()).email(contact.getEmail()).mobile(contact.getMobile()).message(contact.getMessage()).build();
	}


}
