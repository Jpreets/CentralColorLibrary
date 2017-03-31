package com.phototype.ccl.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.phototype.ccl.models.UserModel;


public interface UserRepository  extends JpaRepository<UserModel,Long> {

}
