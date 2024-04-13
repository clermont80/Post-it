package com.example.server.models;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "note")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Note 
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long blocNoteId;
    private String title;
    private String content;
    private String color;


    @Override
    public String toString()
    {
        return "Note{" +
                "id=" + id +
                ", blocNoteId=" + blocNoteId +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", color='" + color + '\'' +
                '}';
    }

}
