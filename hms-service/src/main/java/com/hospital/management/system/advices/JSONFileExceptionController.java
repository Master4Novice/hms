package com.hospital.management.system.advices;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.hospital.management.system.exceptions.JSONFileNotFoundException;

@ControllerAdvice
public class JSONFileExceptionController {

	@ExceptionHandler(value = JSONFileNotFoundException.class)
	public ResponseEntity<Object> exception(JSONFileNotFoundException exception) {
		return new ResponseEntity<>(exception.getLocalizedMessage(), HttpStatus.NOT_FOUND);
	}
}
