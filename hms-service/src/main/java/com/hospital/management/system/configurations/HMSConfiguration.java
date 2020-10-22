package com.hospital.management.system.configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

@Configuration
public class HMSConfiguration {

	@Configuration
	public static class HMSHistoryConfigurer implements WebMvcConfigurer {

		public void addResourceHandlers(final ResourceHandlerRegistry registry) {
			registry.addResourceHandler("swagger-ui.html").addResourceLocations("classpath:/META-INF/resources/");
			registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
			registry.addResourceHandler("/**").addResourceLocations("classpath:/static/").setCachePeriod(3600)
					.resourceChain(true).addResolver(new PathResourceResolver());
		}
	}

}
