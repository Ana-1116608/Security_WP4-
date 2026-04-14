import os
from random import choice
from sqlalchemy import func
from sqlmodel import create_engine, select, Session, SQLModel

from .models.company import Company
from .models.contact import Contact
from .models.listing import Listing
from .utils import get_future_date

sqlite_url = f"sqlite:///{os.environ.get("DATABASE_PATH")}"

# Allow FastAPI to use multiple threads in sqlite
engine = create_engine(sqlite_url, connect_args={"check_same_thread": False})

def get_session():
    with Session(engine) as session:
        yield session

def add_random_listing():
    session = Session(engine)

    contact = session.query(Contact).order_by(func.random()).first()

    title = choice(["Fullstack Developer", "AI Engineer", "Backend Developer"])

    listing = Listing(
        title=title,
        description="Short description",
        contact=contact,
        company=contact.company,
        start_date=get_future_date()
    )

    session.add(listing)
    session.commit()
    session.close()


def seed_database():
    session = Session(engine)

    companies = [
        Company(name="ACME"),
        Company(name="Banana Computers"),
        Company(name="Zanzibar Web Services"),
    ]
    contacts = [
        Contact(name="Wile E. Coyote", email="wec@acme.example.com", company=companies[0]),
        Contact(name="Tim Banana", email="t.banana@banana.example.com", company=companies[1]),
        Contact(name="Ben Jezos", email="b.jezos@zws.example.com", company=companies[2]),
    ]

    for contact in contacts:
        listings = [
            Listing(
                title="Backend Developer",
                description="Short description",
                contact=contact,
                company=contact.company,
                start_date=get_future_date()
            ),
            Listing(
                title="Fullstack Developer",
                description="Short description",
                contact=contact,
                company=contact.company,
                start_date=get_future_date()
            )
        ]

        for listing in listings:
            session.add(listing)

        session.commit()
        session.close()


def setup_database():
    SQLModel.metadata.create_all(engine)
    session = Session(engine)

    # Do not add data when there are already listings in the database
    has_no_listing = len(session.exec(select(Listing).limit(1)).all()) == 0
    if has_no_listing:
        seed_database()
