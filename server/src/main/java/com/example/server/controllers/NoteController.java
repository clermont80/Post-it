package com.example.server.controllers;

import java.util.List;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.server.exceptions.DBException;
import com.example.server.exceptions.NotFoundException;
import com.example.server.models.Note;
import com.example.server.services.NoteService;


@RestController
@RequestMapping("/notes")
@RequiredArgsConstructor
@Slf4j
public class NoteController 
{

    private final NoteService noteService;


    @GetMapping
    public ResponseEntity<List<Note>> getNotes()
    {
        return ResponseEntity.ok(noteService.findAll());
    }

    @GetMapping("/{blocNoteId}")
    public ResponseEntity<List<Note>> getNotesByBlocNoteId(@PathVariable Long blocNoteId)
    {
        return ResponseEntity.ok(noteService.findByBlocNoteId(blocNoteId));
    }

    @PostMapping
    public ResponseEntity<Note> createNote (@RequestBody Note note)
    {
        try
        {
            log.info("Creating note: {}", note.toString());
            return ResponseEntity.ok(noteService.createNote (note));
        }
        catch (NotFoundException e)
        {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        catch (DBException e)
        {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    
    @PutMapping
    public ResponseEntity<Note> updateNote (@RequestBody Note note)
    {
        try
        {
            return ResponseEntity.ok(noteService.updateNote (note));
        }
        catch (DBException e)
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        catch (NotFoundException e)
        {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNote (@PathVariable Long id)
    {
        try
        {
            noteService.deleteNote (id);
            return ResponseEntity.ok().build();
        }
        catch (NotFoundException e)
        {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        catch (DBException e)
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // Delete all notes with the same blocNoteId
    @DeleteMapping("/blocNote/{blocNoteId}")
    public ResponseEntity<Void> deleteNoteByBlocNoteId(@PathVariable Long blocNoteId)
    {
        try
        {
            noteService.deleteNoteByBlocNoteId(blocNoteId);
            return ResponseEntity.ok().build();
        }
        catch (NotFoundException e)
        {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        catch (DBException e)
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAll()
    {
        try
        {
            noteService.deleteAll();
            return ResponseEntity.ok().build();
        }
        catch (Exception e)
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    










}
