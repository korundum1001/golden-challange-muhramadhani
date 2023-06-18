import React from "react";
import './WhyUs.css'
import { Container, Row, Col } from "react-bootstrap";

const WhyUsList = [
    {
        icon : '/src/assets/icon_complete.svg',
        feature : 'Mobil Lengkap',
        description : 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat'
    },
    {
        icon : '/src/assets/icon_price.svg',
        feature : 'Harga Murah',
        description : 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain'
    },
    {
        icon : '/src/assets/icon_24hrs.svg',
        feature : 'Layanan 24 jam',
        description : 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu'
    },
    {
        icon : '/src/assets/icon_professional.svg',
        feature : 'Sopir Profesional',
        description : 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu'
    }
]

const WhyUs = () => {

    return (
        <Container fluid style={{ width: "100%" }}>
            <Row className="whyus-parent">
                <Col className="whyus-child">
                    <h3>Why Us</h3>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </Col>
            </Row>
            <Row className="whyus-parent" id="whyus-parent-two">
                {WhyUsList.map((item) => (
                    <Col sm={4} className="whyus-card">
                        <div><img src={item.icon} alt="" /></div>
                        <div>{item.feature}</div>
                        <div>{item.description}</div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default WhyUs;