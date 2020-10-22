package com.hospital.management.system.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegistrationVO extends AuditVO {

	private String userId;
	private String userPassword;
	private String userName;
	private String userEmailId;
	private String contactNumber;
	private String userStatus;

}
