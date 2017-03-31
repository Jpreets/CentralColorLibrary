package com.phototype.ccl.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.phototype.ccl.dtos.UserDto;
import com.phototype.ccl.services.UserService;


@RestController
@RequestMapping(value = "/user")
public class UserController {
	
	@Autowired
	private UserService userService;

	@RequestMapping(value = "/")
	public List<UserDto> getUsers() {
		return userService.findAll();
	}
	
}
