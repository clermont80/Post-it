package com.example.server.services;



import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.example.server.exceptions.DBException;
import com.example.server.exceptions.NotFoundException;
import com.example.server.models.BlocNote;
import com.example.server.repositories.BlocNoteRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BlocNoteService 
{

    private final BlocNoteRepository blocNoteRepository;


    public List<BlocNote> findAll()
    {
        return blocNoteRepository.findAll();
    }

    public BlocNote createBlocNote (BlocNote blocNote) throws DBException
    {
        try
        {
            return blocNoteRepository.save(blocNote);
        }
        catch (Exception e)
        {
            throw new DBException("Erreur lors de la création du bloc note");
        }
    }

    public BlocNote updateBlocNote (BlocNote blocNote) throws NotFoundException, DBException
    {
        BlocNote isBlocNoteExist = blocNoteRepository.findById(blocNote.getId()).orElse(null);
        if (isBlocNoteExist != null) throw new NotFoundException("Le bloc note n'existe pas (id = " + blocNote.getId() + ")");

        try
        {
            return blocNoteRepository.save(blocNote);
        }
        catch (Exception e)
        {
            throw new DBException("Erreur lors de la mise à jour du bloc note (id = " + blocNote.getId() + ")");
        }
    }

    public void deleteBlocNote(Long id) throws NotFoundException, DBException
    {
        BlocNote isBlocNoteExist = blocNoteRepository.findById(id).orElse(null);
        if (isBlocNoteExist != null) throw new NotFoundException("Le bloc note n'existe pas (id = " + id + ")");

        try
        {
            this.blocNoteRepository.deleteById(id);
        }
        catch (Exception e)
        {
            throw new DBException("Erreur lors de la suppression du bloc note (id = " + id + ")");
        }

    }

    public void deleteAll()
    {
        this.blocNoteRepository.deleteAll();
    }



}
