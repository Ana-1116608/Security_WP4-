import uuid
from typing import TYPE_CHECKING, Optional
from sqlmodel import Field, Relationship, SQLModel

from .contact import Contact

# Conditional import, only for type checking. This avoids circular imports at runtime.
# @see: https://sqlmodel.tiangolo.com/tutorial/code-structure/#hero-model-file
if TYPE_CHECKING:
    from .listing import Listing

class Company(SQLModel, table=True):
  id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
  name: str

  contact_id: uuid.UUID | None = Field(default=None, foreign_key="contact.id")
  contact: Contact | None = Relationship(back_populates="company")
  listings: list["Listing"] = Relationship(back_populates="company")
