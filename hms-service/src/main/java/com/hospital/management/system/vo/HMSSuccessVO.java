package com.hospital.management.system.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HMSSuccessVO {
	private Integer code;
	private String message;

	public HMSSuccessVO(String message) {
		this.code = 200;
		this.message = message;
	}
}
