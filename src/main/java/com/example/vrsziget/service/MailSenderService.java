package com.example.vrsziget.service;


import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;


@Service
public class MailSenderService {
    @Value("${spring.mail.username}")
    private String senderEmail;
    private JavaMailSender sender;

    @Autowired
    public void setSender(JavaMailSender sender) {
        this.sender = sender;
    }

    public void sendEmail(String to, String confUrl, String cancUrl, String name) throws MessagingException {
        MimeMessage mimeMessage = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
        String html = "<html lang=\"hu\"" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Foglalás Megerősítése!</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <h1>Kedves " + name + "!" + "</h1>\n" +
                "    <p>\n" +
                "        Kérlek hagyd jóvá a foglalásod az alábbi linken keresztűl!\n" +
                "    </p>\n" +
                "    <p style=\"padding: 10px;\">" + "https://vrsziget21.hu/" + confUrl +  "</p>\n" +
                "    <p>Üdvözlettel:</p> " +
                "    <h2>VRsziget csapata</h2>" +
                "</body>\n" +
                "</html>";

        helper.setText(html, true);
        helper.setTo(to);
        helper.setSubject("Foglalás megerősítés");
        helper.setFrom(senderEmail);

        sender.send(mimeMessage);
    }

    public void sendInfoEmailToPerson(String name, String canUrl, String email, Timestamp resDate) throws MessagingException {
        MimeMessage mimeMessage = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
        Date date = new Date();
        date.setTime(resDate.getTime());
        String formattedDate = new SimpleDateFormat("yyyy.MM.dd HH:mm").format(date);
        String html = "<html lang=\"hu\"" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Foglalás megerősítve!</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <h1>Kedves " + name + "!" + "</h1>\n" +
                "    <p>\n" +
                "        Sikeresen lefoglaltál egy időpontot VR szobánkba!\n" +
                "    </p>\n" +
                "    <p>\n" +
                "        Várunk egy izgalmas VR élményre " + formattedDate + " órakor!" + "\n" +
                "    <p>\n" +
                "        Kérlek, érkezz(etek) meg 10 perccel korábban, hogy időben el tudjuk kezdeni a játékot." + "\n" +
                "    </p>\n" +
                "        Ha bármilyen problémád lenne a foglalásoddal, kérlek az alábbi linken keresztül mondd le!\n" +
                "    </p>\n" +
                "    <p style=\"padding: 10px;\">" + "https://vrsziget21.hu/" + canUrl + "</p>\n" +
                "    <p>Üdvözlettel:</p> " +
                "    <h2>VRsziget csapata</h2>" +
                "</body>\n" +
                "</html>";

        helper.setText(html, true);
        helper.setTo(email);
        helper.setSubject("Foglalás megerősítve!");
        helper.setFrom(senderEmail);

        sender.send(mimeMessage);
    }

    public void sendEmailToSender(String name, String canURL, String gtype, int member, String email, Timestamp reservationDate) throws MessagingException {
        MimeMessage mimeMessage = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
        Date date = new Date();
        date.setTime(reservationDate.getTime());
        String formattedDate = new SimpleDateFormat("yyyy.MM.dd HH:mm").format(date);
        String html = "<html lang=\"hu\"" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Új Foglalás Érkezett!</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <h1>" + name + " időpontott foglalt!" + "</h1>\n" +
                "    <p>\n" +
                "        Foglalási Infók!\n" +
                "    </p>\n" +
                "    <p style=\"padding: 10px;\">" + "e-mail: " + email +  "</p>\n" +
                "    <p style=\"padding: 10px;\">" + "dátum: " + formattedDate +  "</p>\n" +
                "    <p style=\"padding: 10px;\">" + "típus: " + gtype +  "</p>\n" +
                "    <p style=\"padding: 10px;\">" + "Player: " + member +  "</p>\n" +
                "    <p>\n" +
                "        Foglalás törlése:\n" +
                "    </p>\n" +
                "    <p style=\"padding: 10px;\">" + "https://vrsziget21.hu/" + canURL + "</p>\n" +
                "</body>\n" +
                "</html>";

        helper.setText(html, true);
        helper.setTo(senderEmail);
        helper.setSubject("Új foglalás érkezett!");
        helper.setFrom(senderEmail);

        sender.send(mimeMessage);
    }

    public void sendCancelEmailToSender(String name, String canURL, String gtype, int member, String email, Timestamp reservationDate) throws MessagingException {
        MimeMessage mimeMessage = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
        Date date = new Date();
        date.setTime(reservationDate.getTime());
        String formattedDate = new SimpleDateFormat("yyyy.MM.dd HH:mm").format(date);
        String html = "<html lang=\"hu\"" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Lemondtak egy foglalást!</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <h1>" + name + " lemondta a foglalását!" + "</h1>\n" +
                "    <p>\n" +
                "        Ezek voltak a foglalási infói:\n" +
                "    </p>\n" +
                "    <p style=\"padding: 10px;\">" + "e-mail: " + email +  "</p>\n" +
                "    <p style=\"padding: 10px;\">" + "dátum: " + formattedDate +  "</p>\n" +
                "    <p style=\"padding: 10px;\">" + "típus: " + gtype +  "</p>\n" +
                "    <p style=\"padding: 10px;\">" + "Player: " + member +  "</p>\n" +
                "</body>\n" +
                "</html>";

        helper.setText(html, true);
        helper.setTo(senderEmail);
        helper.setSubject(name + " lemondta a " + formattedDate + " foglalását :(");
        helper.setFrom(senderEmail);

        sender.send(mimeMessage);
    }
}
