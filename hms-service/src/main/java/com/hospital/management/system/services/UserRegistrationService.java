package com.hospital.management.system.services;

import java.io.IOException;

import com.hospital.management.system.vo.UserRegistrationVO;

public interface UserRegistrationService {

	String saveUser(UserRegistrationVO userRegistration) throws IOException;

}
