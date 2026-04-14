
from datetime import date

def get_future_date():
    """
    We want to have listings in the future, so add a couple of months to the date for setting a future date
    """

    today = date.today()
    months_in_a_year = 12
    minimum_amount_of_days_in_a_month = 28
    day = today.day % minimum_amount_of_days_in_a_month
    month_offset = 7
    month = (today.month + month_offset) % months_in_a_year
    year_offset = (today.month + month_offset) // months_in_a_year
    year = today.year + year_offset

    return today.replace(day=day, month=month, year=year)
