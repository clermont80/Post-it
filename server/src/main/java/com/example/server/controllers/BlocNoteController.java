package com.example.server.controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.server.exceptions.DBException;
import com.example.server.exceptions.NotFoundException;
import com.example.server.models.BlocNote;
import com.example.server.services.BlocNoteService;

import java.util.List;

@RestController
@RequestMapping("/bloc-notes")
@RequiredArgsConstructor
@Slf4j
public class BlocNoteController 
{

    private final BlocNoteService blocNoteService;


    @GetMapping
    public ResponseEntity<List<BlocNote>> getBlocNotes()
    {
        return ResponseEntity.ok(blocNoteService.findAll());
    }

    
    @PostMapping
    public ResponseEntity<BlocNote> createBlocNote (@RequestBody BlocNote blocNote)
    {
        try 
        {
            return ResponseEntity.status(HttpStatus.CREATED).body(blocNoteService.createBlocNote(blocNote));
        } 
        catch (DBException e) 
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping
    public ResponseEntity<BlocNote> updateBlocNote (@RequestBody BlocNote blocNote)
    {
        try 
        {
            return ResponseEntity.ok(blocNoteService.updateBlocNote (blocNote));
        } 
        catch (DBException e) 
        {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        catch (NotFoundException e) 
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBlocNote (@PathVariable Long id)
    {
        try 
        {
            blocNoteService.deleteBlocNote(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
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
            blocNoteService.deleteAll();
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } 
        catch (Exception e) 
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
