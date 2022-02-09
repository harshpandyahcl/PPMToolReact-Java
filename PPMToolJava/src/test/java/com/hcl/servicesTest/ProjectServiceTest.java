package com.hcl.servicesTest;


import com.hcl.domain.Project;
import com.hcl.domain.User;
import com.hcl.repositories.ProjectRepository;
import com.hcl.services.ProjectService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.internal.matchers.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.mockito.Mockito.when;

@SpringBootTest
public class ProjectServiceTest {

    @Autowired
    private ProjectService projectServiceTest;

    @MockBean
    private ProjectRepository projectRepositoryTest;

    @Test
    public void findAllTest(){
        long testProjId = 1;
        Project prj = new Project();
        prj.setId(testProjId);
        prj.setProjectName("Demo Project");
        prj.setProjectIdentifier("11011");
        prj.setDescription("Project For mid term demo");

        when(projectRepositoryTest.findAll()).thenReturn(Stream
                .of(prj).collect(Collectors.toList()));

        Iterable<Project> list=projectServiceTest.findAll();

        for (Project p:list) {

            System.out.println(p.getProjectIdentifier());
            System.out.println(p.getProjectName());
              System.out.println(p.getDescription());
            //Assertions.assertThat(p.getProjectName()).isEmpty();
            Assertions.assertThat(p.getProjectName()).isNotEmpty();
            Assertions.assertThat(p.getProjectName()).isNotBlank();
        }

    }
}