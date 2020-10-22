package com.hospital.management.system.services.impls;

import static com.hospital.management.system.constants.IHMSService.HMS_URC_SEVICE;
import static com.hospital.management.system.utils.HMSCommonUtil.getFile;
import static com.hospital.management.system.utils.HMSCommonUtil.readList;
import static com.hospital.management.system.utils.HMSCommonUtil.writeList;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.management.system.configurations.HMSPropertyConfig;
import com.hospital.management.system.constants.IHMSConstant;
import com.hospital.management.system.services.UserRegistrationService;
import com.hospital.management.system.vo.UserRegistrationVO;

@Service(value = HMS_URC_SEVICE)
public class UserRegistrationServiceImpl implements UserRegistrationService, IHMSConstant {

	private static final Logger LOG = LoggerFactory.getLogger(UserRegistrationServiceImpl.class);

	@Autowired
	private HMSPropertyConfig propertyConfig;

	@Override
	public String saveUser(UserRegistrationVO userRegistration) throws IOException {
		LOG.debug("Registering User {}", userRegistration.getUserId());
		userRegistration.setCreatedBy("Abhinav Dwivedi");
		userRegistration.setCreatedDate(LocalDateTime.now().toString());
		userRegistration.setLastModifiedBy("Abhinav Dwivedi");
		userRegistration.setLastModifiedDate(LocalDateTime.now().toString());
		String dataPath = propertyConfig.getProperty("dataLocation");
		LOG.debug("File Path {}", dataPath + HMS_UR_FILE);
		File filePath = getFile(dataPath + HMS_UR_FILE);
		if (filePath.exists()) {
			LOG.debug("Reading From Existing File...");
			@SuppressWarnings("unchecked")
			List<UserRegistrationVO> list = (List<UserRegistrationVO>) readList(filePath);
			LOG.debug("Appending Existing File...");
			list.add(userRegistration);
			writeList(filePath, list);
		} else {
			LOG.debug("Writing New File...");
			List<UserRegistrationVO> list = new ArrayList<>();
			list.add(userRegistration);
			writeList(filePath, list);
		}
		return null;
	}

}
