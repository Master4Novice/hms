package com.hospital.management.system.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HMSExceptionVO {
	private Integer code;
	private String message;

	public HMSExceptionVO(Integer code, String message) {
		this.code = code;
		this.message = message;
	}
}
