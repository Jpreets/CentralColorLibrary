package com.phototype.ccl.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.phototype.ccl.dtos.UserDto;
import com.phototype.ccl.models.UserModel;
import com.phototype.ccl.repositories.UserRepository;


@Service
@Transactional
public class UserService {
	
	@Autowired
	private UserRepository userRepository;

	public List<UserDto> findAll() {
		
		List<UserModel> userModels  =  userRepository.findAll();
		List<UserDto> userDtos =  new ArrayList<>();
		for( UserModel userModel : userModels){
			UserDto userDto  = new UserDto();
			userDto.setUserId(userModel.getUserId());
			userDto.setUserName(userModel.getUserName());
			
			userDtos.add(userDto);
		}
		
		return userDtos;
	}
}
