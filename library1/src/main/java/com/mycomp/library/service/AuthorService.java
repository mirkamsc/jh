package com.mycomp.library.service;

import com.mycomp.library.service.dto.AuthorDTO;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link com.mycomp.library.domain.Author}.
 */
public interface AuthorService {

    /**
     * Save a author.
     *
     * @param authorDTO the entity to save.
     * @return the persisted entity.
     */
    AuthorDTO save(AuthorDTO authorDTO);

    /**
     * Get all the authors.
     *
     * @return the list of entities.
     */
    List<AuthorDTO> findAll();


    /**
     * Get the "id" author.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<AuthorDTO> findOne(Long id);

    /**
     * Delete the "id" author.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
