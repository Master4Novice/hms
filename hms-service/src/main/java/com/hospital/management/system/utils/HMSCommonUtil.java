package com.hospital.management.system.utils;

import java.io.File;
import java.io.IOException;
import java.io.Reader;
import java.io.Writer;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.StandardOpenOption;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.hospital.management.system.vo.HMSExceptionVO;
import com.hospital.management.system.vo.HMSSuccessVO;

public class HMSCommonUtil {

	private static final Logger LOG = LoggerFactory.getLogger(HMSCommonUtil.class);

	private static Gson getGson() {
		return new Gson();
	}

	private static Gson getGsonPretty() {
		return new GsonBuilder().setPrettyPrinting().create();
	}

	public static String exceptionJSON(HMSExceptionVO exceptionVO) {
		return getGsonPretty().toJson(exceptionVO);
	}

	public static String sucessJSON(HMSSuccessVO success) {
		return getGsonPretty().toJson(success);
	}

	public static void writeList(File file, List<?> list) throws IOException {
		Files.deleteIfExists(file.toPath());
		Writer writer = Files.newBufferedWriter(file.toPath(), StandardCharsets.UTF_8, StandardOpenOption.CREATE,
				StandardOpenOption.WRITE, StandardOpenOption.APPEND);
		getGsonPretty().toJson(list, writer);
		writer.close();
		LOG.debug("Written File: {}", file.toPath());
	}

	public static List<?> readList(File file) throws IOException {
		Reader reader = Files.newBufferedReader(file.toPath());
		List<?> list = getGson().fromJson(reader, new TypeToken<List<?>>() {
		}.getType());
		reader.close();
		LOG.debug("Read File: {} with {} records.", file.toPath(), list.size());
		return list;
	}

	public static File getFile(String filePath) {
		return new File(filePath);
	}

	public static boolean isFileExist(File file) {
		return file.exists();
	}

}
