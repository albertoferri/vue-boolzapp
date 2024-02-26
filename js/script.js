// ******** VUE ********
const { createApp } = Vue;
createApp({
    data() {
        return {
            // VARIABILI
            // variabile per filtrare i contatti
            searchTerm: '',
            // inizializzare il messaggio vuoto
            newMessage: '',
            // x visualizzare la chat al click
            currentChat: 0,
            // x mandare vocali
            isRecording: false,
            
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    
    methods: {
        // MILESTONE 2
        // funzione per far apparire la chat al click
        openChat(index) {
            this.currentChat = index;
        },

        extractTime(dato) {
            const date = new Date(dato);
            const hours = date.getHours().toString().padStart(2, '0'); 
            const minutes = date.getMinutes().toString().padStart(2, '0'); 
            return `${hours}:${minutes}`;
        },
          
        // MILESTONE 3
        // funzione per pushare un messaggio dentro l'array
        sendMessage() {
            if (this.newMessage.trim() !== '') {
              const date = new Date();
              const formattedDate = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
              this.contacts[this.currentChat].messages.push({
                date: date,
                message: this.newMessage,
                status: 'sent',
              });
              this.newMessage = '';
            
              setTimeout(() => {
                const replyDate = new Date();
                const formattedReplyDate = replyDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                console.log(formattedReplyDate)
                const messageArray = ['basta scrivermi!!', 'Ciao! mi fa piacere!', 'Scusa non posso parlare ora, ti scrivo dopo!'];
          
                const randomIndex = Math.floor(Math.random() * 3);
          
                this.contacts[this.currentChat].messages.push({
                  date: replyDate,
                  message: messageArray[randomIndex], 
                  status: 'received',
                });
              }, 1000);
            }
        },
          
        // bonus
        deleteMessage(index) {
            this.contacts[this.currentChat].messages.splice(index, 1);
            this.selectedMessageIndex = null;
        },
        // FUNZIONE PER MANDARE UN VOCALE "COME SULL'APP ORIGINALE"
        startRecording(){
            this.isRecording = true;
        },
        // ho usato la stessa funzione per mandare i messaggi ma legata alla pressione del tasto del microfono
        sendVoiceMessage() {
            if (this.isRecording) {
                const date = new Date();
                
                this.contacts[this.currentChat].messages.push({
                    date: date,
                    message: ' ▁ ▂ ▄ ▂ ▅ ▂ ▅ ▄ ▂ ▁ ▄ ▅ ▇ ',
                    status: 'sent',
                });
        
                this.sendMessage();
                this.isRecording = false;
            }
        },
        
    },
    // funzione per filtrare le chat
    // ho usato una proprietà calcolata così che venga riaggiornata solo quando cambia
    computed: {
        filteredAndSortedContacts() {
          // Filtra i contatti in base al termine di ricerca
          const filteredContacts = this.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
          
          // Ordina i contatti filtrati in base all'ultimo messaggio
          return filteredContacts.slice().sort((a, b) => {
            const lastMessageA = a.messages[a.messages.length - 1].date;
            const lastMessageB = b.messages[b.messages.length - 1].date;
            return new Date(lastMessageB) - new Date(lastMessageA);
          });
        }
    },
    created() {
        this.contacts.forEach(contact => {
          contact.messages.forEach(message => {
            message.timeOnly = this.extractTime(message.date);
          });
        });
    }
}).mount("#app");
// ******** VUE ********