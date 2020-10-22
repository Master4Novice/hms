package com.hospital.management.system.exceptions;

import static com.hospital.management.system.utils.HMSCommonUtil.exceptionJSON;

import com.hospital.management.system.vo.HMSExceptionVO;;

public class JSONFileNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3384330031778067259L;

	JSONFileNotFoundException() {
		super();
	}

	public JSONFileNotFoundException(HMSExceptionVO exceptionVO) {
		super(exceptionJSON(exceptionVO));
	}

}
