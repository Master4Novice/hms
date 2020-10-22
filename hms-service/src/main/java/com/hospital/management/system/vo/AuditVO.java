package com.hospital.management.system.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuditVO {

	private String createdBy;
	private String createdDate;
	private String lastModifiedBy;
	private String lastModifiedDate;

}
