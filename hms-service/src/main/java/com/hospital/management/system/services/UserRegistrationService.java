package com.hospital.management.system.services;

import com.hospital.management.system.vo.UserRegistrationVO;

import java.io.IOException;

public interface UserRegistrationService {

    String saveUser(UserRegistrationVO userRegistration) throws IOException;

    String validateUser(String userId) throws IOException;
}
