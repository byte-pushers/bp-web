package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 * Application Roles entity/database model.
 */
@Getter
@Setter
@Entity
public class Role {

    @Id
    @Column(name = "id", nullable = false, updatable = false, unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "ID_GENERATOR")
    private Long id;

    @Column
    private String name;
}