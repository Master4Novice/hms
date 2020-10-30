package com.hospital.management.system.exceptions;

import com.hospital.management.system.vo.HMSExceptionVO;

import static com.hospital.management.system.utils.HMSCommonUtil.exceptionJSON;

;

public class UserNotFoundException extends RuntimeException {

    /**
     *
     */
    private static final long serialVersionUID = -3384330031778067259L;

    UserNotFoundException() {
        super();
    }

    public UserNotFoundException(HMSExceptionVO exceptionVO) {
        super(exceptionJSON(exceptionVO));
    }

}
