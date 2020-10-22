package com.hospital.management.system.controller;

import static com.hospital.management.system.utils.HMSCommonUtil.sucessJSON;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.management.system.services.UserRegistrationService;
import com.hospital.management.system.vo.HMSSuccessVO;
import com.hospital.management.system.vo.UserRegistrationVO;

@RestController
public class UserRegistrationController extends MasterController {

	private UserRegistrationService service;

	@Autowired
	UserRegistrationController(UserRegistrationService service) {
		this.service = service;
	}

	@PostMapping(path = HMS_URC_SAVE_USER, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> saveUser(@RequestBody UserRegistrationVO userRegistration) throws IOException {
		String success = service.saveUser(userRegistration);
		return new ResponseEntity<>(sucessJSON(new HMSSuccessVO(success)), HttpStatus.OK);
	}

}
