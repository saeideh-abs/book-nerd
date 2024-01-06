export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      author: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      book: {
        Row: {
          awards: string[] | null
          bbe_score: number | null
          bbe_votes: number | null
          book_format: string | null
          cover_img: string
          description: string
          edition: string | null
          first_publish_date: string | null
          id: string
          isbn: string | null
          language: string | null
          liked_percent: number | null
          num_ratings: number | null
          original_id: string | null
          pages: number | null
          price: number | null
          publish_date: string | null
          publisher_id: string | null
          rating: number | null
          ratings_by_stars: number[] | null
          series: string | null
          title: string | null
        }
        Insert: {
          awards?: string[] | null
          bbe_score?: number | null
          bbe_votes?: number | null
          book_format?: string | null
          cover_img: string
          description: string
          edition?: string | null
          first_publish_date?: string | null
          id?: string
          isbn?: string | null
          language?: string | null
          liked_percent?: number | null
          num_ratings?: number | null
          original_id?: string | null
          pages?: number | null
          price?: number | null
          publish_date?: string | null
          publisher_id?: string | null
          rating?: number | null
          ratings_by_stars?: number[] | null
          series?: string | null
          title?: string | null
        }
        Update: {
          awards?: string[] | null
          bbe_score?: number | null
          bbe_votes?: number | null
          book_format?: string | null
          cover_img?: string
          description?: string
          edition?: string | null
          first_publish_date?: string | null
          id?: string
          isbn?: string | null
          language?: string | null
          liked_percent?: number | null
          num_ratings?: number | null
          original_id?: string | null
          pages?: number | null
          price?: number | null
          publish_date?: string | null
          publisher_id?: string | null
          rating?: number | null
          ratings_by_stars?: number[] | null
          series?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'book_publisher_id_fkey'
            columns: ['publisher_id']
            isOneToOne: false
            referencedRelation: 'publisher'
            referencedColumns: ['id']
          },
        ]
      }
      book_author: {
        Row: {
          author_id: string | null
          book_id: string | null
          id: string
          role: string | null
        }
        Insert: {
          author_id?: string | null
          book_id?: string | null
          id?: string
          role?: string | null
        }
        Update: {
          author_id?: string | null
          book_id?: string | null
          id?: string
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'book_author_author_id_fkey'
            columns: ['author_id']
            isOneToOne: false
            referencedRelation: 'author'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'book_author_book_id_fkey'
            columns: ['book_id']
            isOneToOne: false
            referencedRelation: 'book'
            referencedColumns: ['id']
          },
        ]
      }
      book_genre: {
        Row: {
          book_id: string | null
          genre_id: number | null
          id: string
        }
        Insert: {
          book_id?: string | null
          genre_id?: number | null
          id?: string
        }
        Update: {
          book_id?: string | null
          genre_id?: number | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'book_genre_book_id_fkey'
            columns: ['book_id']
            isOneToOne: false
            referencedRelation: 'book'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'book_genre_genre_id_fkey'
            columns: ['genre_id']
            isOneToOne: false
            referencedRelation: 'genre'
            referencedColumns: ['id']
          },
        ]
      }
      genre: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      publisher: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
      Database['public']['Views'])
  ? (Database['public']['Tables'] &
      Database['public']['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
  ? Database['public']['Enums'][PublicEnumNameOrOptions]
  : never
