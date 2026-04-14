import uuid
from typing import TYPE_CHECKING, Optional
from sqlmodel import Field, Relationship, SQLModel

# Conditional import, only for type checking. This avoids circular imports at runtime.
# @see: https://sqlmodel.tiangolo.com/tutorial/code-structure/#hero-model-file
if TYPE_CHECKING:
    from .company import Company
    from .listing import Listing

class Contact(SQLModel, table=True):
  id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
  name: str
  email: str
  company: Optional["Company"] = Relationship(back_populates="contact")
  listings: list["Listing"] = Relationship(back_populates="contact")
