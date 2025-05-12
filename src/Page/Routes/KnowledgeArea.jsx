import { KnowledgeCard } from "../../Components/Cards";

export default function KnowledgeArea() {
  return (
    <div className="page-content">
      <h1>Espace de connaissances</h1>
      <div className="pt-4 flex flex-col gap-4">
        <h4>
          Retrouvez une liste de liens permettant de suivre l'actualité
          concernant la sécurité numérique
        </h4>
        <div className="flex flex-col md:grid grid-cols-3 gap-4">
          <KnowledgeCard
            brand="Cybermalveillance.gouv.fr"
            title="Les 10 mesures essentielles pour assurer votre cybersécurité"
            link="https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/10-mesures-essentielles-assurer-securite-numerique"
          />
          <KnowledgeCard
            brand="ANSSI"
            title="Bonnes pratiques - Protégez-vous"
            link="https://cyber.gouv.fr/bonnes-pratiques-protegez-vous"
          />
          <KnowledgeCard
            brand="Malwarebytes"
            title="Assurer la sécurité de vos enfants en ligne"
            link="https://www.malwarebytes.com/fr/cybersecurity/basics/parental-control"
          />
          <KnowledgeCard
            brand="SafetyCulture"
            title="Guide complet de la sécurité sur Internet"
            link="https://safetyculture.com/fr/themes/securite-sur-internet/"
          />
          <KnowledgeCard
            brand="Cybermalveillance.gouv.fr"
            title="Assistance aux victimes de cybermalveillance"
            link="https://www.cybermalveillance.gouv.fr/bonnes-pratiques"
          />
          <KnowledgeCard
            brand="ANSSI"
            title="Guides essentiels et bonnes pratiques de cybersécurité"
            link="https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer"
          />
          <KnowledgeCard
            brand="Malwarebytes"
            title="Conseils de sécurité sur Internet"
            link="https://www.malwarebytes.com/fr/cybersecurity/basics/internet-safety-tips-for-kids"
          />
          <KnowledgeCard
            brand="Cybermalveillance.gouv.fr"
            title="Que faire en cas de cyberattaque ?"
            link="https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/cyberattaque-consignes-collaborateurs"
          />
          <KnowledgeCard
            brand="ANSSI"
            title="Les fondamentaux pour se sécuriser"
            link="https://cyber.gouv.fr/les-fondamentaux-pour-se-securiser"
          />
          <KnowledgeCard
            brand="Cybermalveillance.gouv.fr"
            title="Assistance aux victimes de cybermalveillance"
            link="https://www.cybermalveillance.gouv.fr/blog"
          />
        </div>
      </div>
    </div>
  );
}
