package com.hospital.management.system.configurations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
public class HMSPropertyConfig {

	@Autowired
	private Environment env;

	public String getProperty(String key) {
		return env.getProperty(key);
	}
}
