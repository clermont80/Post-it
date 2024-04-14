package com.example.server.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.server.models.Note;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> 
{

    List<Note> findByBlocNoteId(Long blocNoteId);



}
