package com.hospital.management.system.services.impls;

import com.google.gson.reflect.TypeToken;
import com.hospital.management.system.configurations.HMSPropertyConfig;
import com.hospital.management.system.constants.IHMSConstant;
import com.hospital.management.system.exceptions.JSONFileNotFoundException;
import com.hospital.management.system.exceptions.UserNotFoundException;
import com.hospital.management.system.services.UserRegistrationService;
import com.hospital.management.system.vo.HMSExceptionVO;
import com.hospital.management.system.vo.UserRegistrationVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import static com.hospital.management.system.constants.IHMSService.HMS_URC_SEVICE;
import static com.hospital.management.system.utils.HMSCommonUtil.*;

@Service(value = HMS_URC_SEVICE)
public class UserRegistrationServiceImpl implements UserRegistrationService, IHMSConstant {

    private static final Logger LOG = LoggerFactory.getLogger(UserRegistrationServiceImpl.class);

    @Autowired
    private HMSPropertyConfig propertyConfig;

    private final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern(DATE_FORMAT_LOG);

    @Override
    public String saveUser(UserRegistrationVO userRegistration) throws IOException {
        LOG.debug("Registering User {}", userRegistration.getUserId());
        userRegistration.setCreatedBy(DEFAULT_USER);
        userRegistration.setCreatedDate(LocalDateTime.now().format(FORMATTER));
        userRegistration.setLastModifiedBy(DEFAULT_USER);
        userRegistration.setLastModifiedDate(LocalDateTime.now().format(FORMATTER));
        String dataPath = propertyConfig.getProperty("dataLocation");
        createDirectory(dataPath);
        LOG.debug("File Path {}", dataPath + HMS_UR_FILE);
        File filePath = getFile(dataPath + HMS_UR_FILE);
        if (filePath.exists()) {
            LOG.debug("Reading From Existing File...");
            List<UserRegistrationVO> list = readUserVOList(filePath);
            LOG.debug("Appending Existing File...");
            if (foundUser(userRegistration.getUserId(), list)) {
                list.add(userRegistration);
                writeList(filePath, list);
            } else {
                return "User Exist";
            }

        } else {
            LOG.debug("Writing New File...");
            List<UserRegistrationVO> list = new ArrayList<>();
            list.add(userRegistration);
            writeList(filePath, list);
        }
        return "User Registered Successfully";
    }

    @Override
    public String validateUser(String userId) throws IOException {
        String dataPath = propertyConfig.getProperty("dataLocation");
        LOG.debug("File Path {}", dataPath + HMS_UR_FILE);
        File filePath = getFile(dataPath + HMS_UR_FILE);
        if (filePath.exists()) {
            LOG.debug("Reading From Existing File...");
            List<UserRegistrationVO> list = readUserVOList(filePath);
            if (foundUser(userId, list)) {
                HMSExceptionVO exceptionVO = new HMSExceptionVO(204, "No User Exist");
                throw new UserNotFoundException(exceptionVO);
            }
        } else {
            HMSExceptionVO exceptionVO = new HMSExceptionVO(500, "No File Exist To Verify");
            throw new JSONFileNotFoundException(exceptionVO);
        }
        return "User Exist";
    }

    private boolean foundUser(String userId, List<UserRegistrationVO> userRegistrationVOS) {
        boolean found = false;
        for (UserRegistrationVO user : userRegistrationVOS) {
            if (userId.equals(user.getUserId())) {
                found = true;
                break;
            }
        }
        return !found;
    }

    private static List<UserRegistrationVO> readUserVOList(File file) throws IOException {
        Reader reader = Files.newBufferedReader(file.toPath());
        List<UserRegistrationVO> list = getGson().fromJson(reader, new TypeToken<List<UserRegistrationVO>>() {
        }.getType());
        reader.close();
        LOG.debug("Read File: {} with {} user records.", file.toPath(), list.size());
        return list;
    }
}
