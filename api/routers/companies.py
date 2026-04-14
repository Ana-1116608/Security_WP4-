from fastapi import APIRouter, Depends, Query, HTTPException
from sqlmodel import select
from uuid import UUID

from ..db import get_session, Session
from ..models.company import Company
from ..models.listing import Listing, ListingWithRelated

router = APIRouter()

@router.get("/companies", tags=["companies"])
async def get_companies(
    session: Session = Depends(get_session),
    offset: int = 0,
    limit: int = Query(default=100, le=100),
) -> list[Company]:
    companies = session.exec(select(Company).offset(offset).limit(limit)).all()
    return companies

@router.get("/companies/{company_id}", tags=["companies"])
async def get_company(
    company_id: UUID,
    session: Session = Depends(get_session),
) -> Company:
    company = session.get(Company, company_id)
    if not company:
           raise HTTPException(status_code=404, detail="Team not found")
    return company

@router.get("/companies/{company_id}/listings", tags=["companies", "listings"])
async def get_company_listings(
    company_id: UUID,
    session: Session = Depends(get_session),
    offset: int = 0,
    limit: int = Query(default=100, le=100),
) -> list[ListingWithRelated]:
    listings = session.exec(select(Listing).where(Listing.company_id == company_id).offset(offset).limit(limit)).all()
    return listings
