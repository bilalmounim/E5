import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.mail.*;
import javax.mail.internet.*;
import java.util.Properties;

@WebServlet("/inscription")
public class InscriptionServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Récupérer les données du formulaire
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        // Envoyer un e-mail
        sendEmail(firstName, lastName, email, password);

        // Réponse à l'utilisateur
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h2>Inscription réussie. Veuillez vérifier votre e-mail.</h2>");
        out.println("</body></html>");
    }

    private void sendEmail(String firstName, String lastName, String userEmail, String userPassword) {
        // Propriétés pour la configuration du serveur SMTP
        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.example.com"); // Remplace avec le serveur SMTP que tu utilises
        props.put("mail.smtp.port", "587"); // Port SMTP
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");

        // Session pour l'envoi de l'e-mail
        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("bilalmounim6@gmail.com", "Bilalm1205");
            }
        });

        try {
            // Créer le message
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("bilalmounim6@gmail.com")); // Remplace avec ton adresse e-mail
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(userEmail));
            message.setSubject("Bienvenue sur notre site");
            message.setText("Bonjour " + firstName + " " + lastName + ",\n\nBienvenue sur notre site. Votre mot de passe est " + userPassword + ".");

            // Envoyer le message
            Transport.send(message);

            System.out.println("E-mail envoyé avec succès.");

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
