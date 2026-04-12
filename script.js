// No início da classe, adicione as notas pré-preenchidas:
init() {
    // Carrega notas pré-definidas se não existirem
    if (!localStorage.getItem('relacionamentoNotes')) {
        this.notes = {
            continued: [
                { id: 1, text: '🧤 Alanyse joga handebol INCRÍVEL como goleirona! Defendendo tudo! 🔥', column: 'continued', createdAt: '2024-11-12' },
                { id: 2, text: '😍 O sorriso lindo da Alanyse ilumina meu dia inteiro ✨', column: 'continued', createdAt: '2024-11-12' },
                { id: 3, text: '💛 O cabelo loiro lindo da Alanyse é simplesmente perfeito', column: 'continued', createdAt: '2024-11-12' }
            ],
            surprises: [
                { id: 4, text: '👶 Alanyse cuida de crianças com tanto carinho, ela AMA crianças! ❤️', column: 'surprises', createdAt: '2024-11-12' },
                { id: 5, text: '🌸 O cheiro maravilhoso da Alanyse me deixa apaixonado toda vez! 😍', column: 'surprises', createdAt: '2024-11-12' }
            ]
        };
        this.saveToStorage();
    }
    
    this.bindEvents();
    this.loadNotes();
    this.updateStats();
}