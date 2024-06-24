export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('it-IT', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  }