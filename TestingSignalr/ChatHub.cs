using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SignalR.Hubs;

namespace TestingSignalr.Core
{
    public class ChatHub : Hub
    {
        public void Send(string message)
        {
            //Call the addMessage method on all clients.
            Clients.broadcast(message);
        }
    }
}