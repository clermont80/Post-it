package com.example.server.services;

import org.springframework.stereotype.Service;

import com.example.server.exceptions.DBException;
import com.example.server.exceptions.NotFoundException;
import com.example.server.models.BlocNote;
import com.example.server.models.Note;
import com.example.server.repositories.BlocNoteRepository;
import com.example.server.repositories.NoteRepository;

import lombok.RequiredArgsConstructor;
import java.util.List;





@Service
@RequiredArgsConstructor
public class NoteService 
{

    private final NoteRepository noteRepository;
    private final BlocNoteRepository blocNoteRepository;

    public List<Note> findAll()
    {
        return noteRepository.findAll();
    }

    public List<Note> findByBlocNoteId(Long blocNoteId)
    {
        return noteRepository.findByBlocNoteId(blocNoteId);
    }

    public Note createNote(Note note) throws DBException, NotFoundException
    {
        BlocNote isBlocNoteExist = blocNoteRepository.findById(note.getBlocNoteId()).orElse(null);
        if (isBlocNoteExist == null) throw new NotFoundException("Le bloc note n'existe pas (id = " + note.getBlocNoteId() + ")");
        
        try
        {
            return noteRepository.save(note);
        }
        catch (Exception e)
        {
            
            throw new DBException("Erreur lors de la création de la note");
        }
    }

    public Note updateNote(Note note) throws DBException, NotFoundException
    {
        Note isNoteExist = noteRepository.findById(note.getId()).orElse(null);
        if (isNoteExist == null) throw new NotFoundException("La note n'existe pas (id = " + note.getId() + ")");

        try
        {
            return noteRepository.save(note);
        }
        catch (Exception e)
        {
            throw new DBException("Erreur lors de la mise à jour de la note (id = " + note.getId() + ")");
        }
    }

    public void deleteNote (Long id) throws NotFoundException, DBException
    {
        Note isNoteExist = noteRepository.findById(id).orElse(null);
        if (isNoteExist == null) throw new NotFoundException("La note n'existe pas (id = " + id + ")");

        try
        {
            noteRepository.deleteById(id);
        }
        catch (Exception e)
        {
            throw new DBException("Erreur lors de la suppression de la note (id = " + id + ")");
        }
    }

    public void deleteAll()
    {
        noteRepository.deleteAll();
    }









}
