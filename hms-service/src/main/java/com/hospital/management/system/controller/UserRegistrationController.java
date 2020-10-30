package com.hospital.management.system.controller;

import com.hospital.management.system.services.UserRegistrationService;
import com.hospital.management.system.vo.HMSSuccessVO;
import com.hospital.management.system.vo.UserRegistrationVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

import static com.hospital.management.system.utils.HMSCommonUtil.sucessJSON;

@RestController
public class UserRegistrationController extends MasterController {

    private UserRegistrationService service;

    @Autowired
    UserRegistrationController(UserRegistrationService service) {
        this.service = service;
    }

    @GetMapping(path = HMS_URC_VALID_USER + "/{userId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> validateUser(@PathVariable String userId) throws IOException {
        String success = service.validateUser(userId);
        return new ResponseEntity<>(sucessJSON(new HMSSuccessVO(success)), HttpStatus.OK);
    }

    @PostMapping(path = HMS_URC_SAVE_USER, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> saveUser(@RequestBody UserRegistrationVO userRegistration) throws IOException {
        String success = service.saveUser(userRegistration);
        return new ResponseEntity<>(sucessJSON(new HMSSuccessVO(success)), HttpStatus.OK);
    }

}
